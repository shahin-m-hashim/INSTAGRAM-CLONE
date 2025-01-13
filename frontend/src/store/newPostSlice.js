const initial = {
  newPost: {
    files: [],
    edits: {
      zoom: 1,
      aspectRatio: "square",
    },
    activeMenu: null,
    isSubmitting: false,
    status: "selecting",
    showDiscardModal: false,
  },
};

const createNewPostSlice = (set) => ({
  ...initial,

  addNewPost: (file) => {
    set(
      (state) => {
        state.newPost.files.push(file);
        state.newPost.status = "cropping";
      },
      undefined,
      "addNewPost"
    );
  },

  removePost: (idx) => {
    set(
      (state) => {
        state.newPost.files.splice(idx, 1);
      },
      undefined,
      "removePost"
    );
  },

  setPostEdits: (key, value) => {
    set(
      (state) => {
        state.newPost.edits[key] = value;
      },
      undefined,
      "editNewPost"
    );
  },

  setNewPostStatus: (status) => {
    set(
      (state) => {
        state.newPost.status = status;
      },
      undefined,
      "setNewPostStatus"
    );
  },

  setActiveMenu: (menu) => {
    set(
      (state) => {
        state.newPost.activeMenu =
          state.newPost.activeMenu === menu ? null : menu;
      },
      undefined,
      "setActiveMenu"
    );
  },

  setShowDiscardModal: (value) => {
    set(
      (state) => {
        state.newPost.showDiscardModal = value;
      },
      undefined,
      "setShowDiscardModal"
    );
  },

  resetNewPostSlice: () => set(initial, undefined, "resetNewPostSlice"),
});

export default createNewPostSlice;
