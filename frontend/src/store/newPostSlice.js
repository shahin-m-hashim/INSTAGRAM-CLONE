import { v4 as uuidv4 } from "uuid";

const initial = {
  newPost: {
    files: [],
    crop: "square",
    status: "selecting", // cropping, editing, finishing, submitting
    showDiscardModal: false,
    activeEditMenu: "filter",
    activeCropModal: null,
    isAdjusting: false,
    showAdvancedSettingsTab: false,
    details: {
      caption: "",
      collaborators: [],
      tags: [],
      user: {
        username: "",
        profilePic: "",
      },
      location: "",
      advancedSettings: {
        turnOffComments: false,
        hideLikeAndViewCounts: false,
      },
    },
    error: null,
    currentlyInView: null,
  },
};

const initialAdjustments = {
  brightness: 100,
  contrast: 100,
  fade: 0,
  saturation: 100,
  temperature: 0,
};

const createNewPostSlice = (set) => ({
  ...initial,

  addNewPosts: (files) => {
    set(
      (state) => {
        if (
          !files.some(
            (file) =>
              file.type.startsWith("video") || file.type.startsWith("image")
          )
        ) {
          state.newPost.error = "invalidFileError";
          return;
        }

        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > 1 * 1024 * 1024 * 1024) {
          state.newPost.error = "fileSizeError";
          return;
        }

        const videos = files.filter((file) => file.type.startsWith("video"));
        if (videos.length > 1) {
          state.newPost.error = "videoLengthError";
          return;
        }

        const formattedFiles = files.map((file) => ({
          id: uuidv4(),
          src: URL.createObjectURL(file),
          zoom: 1,
          filter: "original",
          type: file.type.split("/")[0],
          isMuted: file.type.startsWith("video") ? true : null,
          adjustments: initialAdjustments,
        }));

        state.newPost.error = null;
        state.newPost.status = "cropping";
        state.newPost.files = [...state.newPost.files, ...formattedFiles];
      },
      undefined,
      "addNewPosts"
    );
  },

  setNewPostStatus: (status) => {
    set(
      (state) => {
        state.newPost.activeCropModal = null;
        state.newPost.status = status;
      },
      undefined,
      "setNewPostStatus"
    );
  },

  setNewPostCrop: (crop) => {
    set(
      (state) => {
        state.newPost.crop = crop;
      },
      undefined,
      "setNewPostCrop"
    );
  },

  setNewPostZoom: (id, zoom) => {
    set(
      (state) => {
        const file = state.newPost.files.find((f) => f.id === id);
        if (file) file.zoom = zoom;
      },
      undefined,
      "setNewPostZoom"
    );
  },

  setNewPostFilter: (filter) => {
    set(
      (state) => {
        const { currentlyInView } = state.newPost;
        const file = state.newPost.files.find((f) => f.id === currentlyInView);
        if (file) file.filter = filter;
      },
      undefined,
      "setNewPostFilter"
    );
  },

  setNewPostAdjustments: (adjustment, value) => {
    set(
      (state) => {
        const { currentlyInView } = state.newPost;
        const file = state.newPost.files.find((f) => f.id === currentlyInView);
        if (file) file.adjustments[adjustment] = value;
        state.newPost.isAdjusting = true;
      },
      undefined,
      "setNewPostAdjustments"
    );
  },

  setNewPostDetails: (detail, value) => {
    set(
      (state) => {
        state.newPost.details[detail] = value;
      },
      undefined,
      "setNewPostDetails"
    );
  },

  toggleNewPostAdvancedSettings: (detail) => {
    set(
      (state) => {
        state.newPost.details.advancedSettings[detail] =
          !state.newPost.details.advancedSettings[detail];
      },
      undefined,
      "toggleNewPostAdvancedSettings"
    );
  },

  setActiveCropModal: (value) => {
    set(
      (state) => {
        state.newPost.activeCropModal = value;
      },
      undefined,
      "setActiveCropModel"
    );
  },

  removeNewPost: (id) => {
    set(
      (state) => {
        state.newPost.files = state.newPost.files.filter(
          (file) => file.id !== id
        );
      },
      undefined,
      "removeNewPost"
    );
  },

  setShowDiscardNewPostModal: (value) => {
    set(
      (state) => {
        state.newPost.showDiscardModal = value;
      },
      undefined,
      "setShowDiscardNewPost"
    );
  },

  toggleNewPostActiveCropModal: (modal) => {
    set(
      (state) => {
        state.newPost.activeCropModal =
          state.newPost.activeCropModal === modal ? null : modal;
      },
      undefined,
      "toggleNewPostActiveCropModal"
    );
  },

  setNewPostActiveCropModal: (value) => {
    set(
      (state) => {
        state.newPost.activeCropModal = value;
      },
      undefined,
      "setActiveCropMenu"
    );
  },

  setNewPostActiveEditMenu: (value) => {
    set(
      (state) => {
        state.newPost.activeEditMenu = value;
      },
      undefined,
      "setNewPostActiveEditMenu"
    );
  },

  setCurrentlyInView: (id) => {
    set(
      (state) => {
        state.newPost.currentlyInView = id;
      },
      undefined,
      "setCurrentlyInView"
    );
  },

  toggleVideoSound: (id) => {
    set(
      (state) => {
        const file = state.newPost.files.find((f) => f.id === id);
        if (file) file.isMuted = !file.isMuted;
      },
      undefined,
      "toggleVideoSound"
    );
  },

  toggleShowNewPostAdvancedSettingsTab: () => {
    set(
      (state) => {
        state.newPost.showAdvancedSettingsTab =
          !state.newPost.showAdvancedSettingsTab;
      },
      undefined,
      "toggleShowNewPostAdvancedDetailsTab"
    );
  },

  resetAllAdjustments: () => {
    set(
      (state) => {
        const { currentlyInView } = state.newPost;
        const file = state.newPost.files.find((f) => f.id === currentlyInView);
        if (file) file.adjustments = initialAdjustments;
        state.newPost.isAdjusting = false;
      },
      undefined,
      "resetAllAdjustments"
    );
  },

  resetNewPostSlice: () => set(initial, undefined, "resetNewPostSlice"),
});

export default createNewPostSlice;
