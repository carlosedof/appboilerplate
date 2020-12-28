let snackRef = null;

function setRef(ref) {
  snackRef = ref;
}

function setSnackbarInfos(text, open = true) {
  snackRef.setInfos({ text }, true);
}

function closeSnackbar() {
  snackRef.closeSnackbar();
}

export { setRef, setSnackbarInfos, closeSnackbar };
