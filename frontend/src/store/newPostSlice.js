import { v4 as uuidv4 } from "uuid";

const initial = {
  newPost: {
    files: [],
    crop: "square",
    status: "selecting", // cropping, editing, finishing, submitting
    showDiscardModal: false,
    activeEditMenu: "filter",
    activeCropModal: null,
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

const createNewPostSlice = (set, get) => ({
  ...initial,

  addNewPosts: (files) => {
    set(
      (state) => {
        const formattedFiles = files.map((file) => ({
          id: uuidv4(),
          src: URL.createObjectURL(file),
          zoom: 1,
          filter: "original",
          type: file.type.split("/")[0],
          adjustments: {
            fade: 0,
            contrast: 0,
            vignette: 0,
            brightness: 0,
            saturation: 0,
            temperature: 0,
          },
        }));
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

  setNewPostFilter: (id, filter) => {
    set(
      (state) => {
        const file = state.newPost.files.find((f) => f.id === id);
        if (file) file.filter = filter;
      },
      undefined,
      "setNewPostFilter"
    );
  },

  setNewPostAdjustments: (id, adjustment, value) => {
    set(
      (state) => {
        const file = state.newPost.files.find((f) => f.id === id);
        if (file) file.zoom.adjustments[adjustment] = value;
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

  getPostFile: (id) => get().newPost.files.find((f) => f.id === id),

  resetNewPostSlice: () => set(initial, undefined, "resetNewPostSlice"),
});

export default createNewPostSlice;
