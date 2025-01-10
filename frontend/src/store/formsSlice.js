import {
  validateIdentifier,
  validatePassword,
  validateUsername,
} from "utils/validator";

const initial = {
  forms: {
    login: {
      fields: {
        identifier: {
          value: "",
          error: null,
        },
        password: {
          value: "",
          error: null,
        },
      },
      error: null,
      isValid: false,
      isSubmitting: false,
      showPassword: false,
    },
    signup: {
      fields: {
        identifier: {
          value: "",
          error: null,
          validationCompleted: false,
        },
        password: {
          value: "",
          error: null,
          validationCompleted: false,
        },
        fullName: {
          value: "",
          error: null,
        },
        username: {
          value: "",
          error: null,
          validationCompleted: false,
        },
      },
      error: null,
      isValid: false,
      isSubmitting: false,
      showPassword: false,
    },
  },
};

const createFormsSlice = (set, get) => ({
  ...initial,

  setSignupFormFieldValue: (field, value) =>
    set(
      (state) => {
        state.forms.signup.fields[field].value = value;
      },
      undefined,
      "setSignupFormFieldValue"
    ),

  setLoginFormFieldValue: (field, value) =>
    set(
      (state) => {
        state.forms.login.fields[field].value = value;
        if (
          state.forms.login.fields.identifier.value &&
          state.forms.login.fields.password.value.length >= 6
        ) {
          state.forms.login.isValid = true;
        }
      },
      undefined,
      "setLoginFormFieldValue"
    ),

  validateSignupFormField: (field, value) =>
    set(
      (state) => {
        let error = "";
        if (field === "identifier") {
          error = validateIdentifier(value);
        } else if (field === "password") {
          error = validatePassword(value);
        } else if (field === "username") {
          error = validateUsername(value);
        }

        if (error) {
          state.forms.signup.isValid = false;
          state.forms.signup.fields[field].error = error;
        } else {
          state.forms.signup.isValid = true;
          state.forms.signup.fields[field].error = null;
        }

        state.forms.signup.fields[field].validationCompleted = true;
      },
      undefined,
      "validateSignupFormField"
    ),

  setFormError: (form, error) =>
    set(
      (state) => {
        state.forms[form].error = error;
      },
      undefined,
      "setFormError"
    ),

  togglePasswordVisibility: (form) =>
    set(
      (state) => {
        state.forms[form].showPassword = !state.forms[form].showPassword;
      },
      undefined,
      "togglePasswordVisibility"
    ),

  setFormIsSubmitting: (form, isSubmitting) =>
    set(
      (state) => {
        state.forms[form].isSubmitting = isSubmitting;
      },
      undefined,
      "setFormIsSubmitting"
    ),

  getFormData: (form) => {
    const formData = {};
    const fields = get().forms[form].fields;

    Object.keys(fields).forEach((field) => {
      formData[field] = fields[field].value;
    });

    return JSON.stringify(formData);
  },

  resetFormSlice: (form) =>
    set(
      (state) => {
        state.forms[form] = initial.forms[form];
      },
      undefined,
      "resetFormSlice"
    ),
});

export default createFormsSlice;
