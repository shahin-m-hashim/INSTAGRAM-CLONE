const createMessengerSlice = (set) => ({
  messenger: {
    showMessage: false,
    showMessageDetails: null,
  },

  setShowMessage: (showMessage) => {
    set(
      (state) => {
        state.messenger.showMessage = showMessage;
      },
      undefined,
      "setShowMessage"
    );
  },

  toggleShowMessageDetails: () => {
    set(
      (state) => {
        state.messenger.showMessageDetails =
          !state.messenger.showMessageDetails;
      },
      undefined,
      "toggleShowMessageDetails"
    );
  },
});

export default createMessengerSlice;
