import { EMAIL } from "@/config/constants";
import { ChangeEvent, FormEvent, useMemo, useReducer, useState } from "react";
import { ContactFormAction, ContactFormInputs, ContactFormState, INIT_STATE } from "./types";

function useContactForm () {
  const [ state, dispatch ] = useReducer(_formReducer, INIT_STATE);
  const [ allEmptyFields, setAllEmptyFields ] = useState<string[]>([]);

  const emptyFields = useMemo(
    () => {
      return Object.entries(state)
        .filter((pair) => pair[ 1 ] === "")
        .map(([ key ]) => key) as ContactFormInputs[];
    },
    [ state ],
  );


  function handleFormChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback?: () => void) {
    if (callback) callback();
    dispatch({
      type: 'FIELD_CHANGE',
      fieldName: e.target.name.toLocaleLowerCase() as keyof ContactFormState,
      payload: e.target.value,
    });
  };

  function handleFormSubmit (e: FormEvent, callback?: () => void, onError?: () => void): void {
    e.preventDefault();
    if (emptyFields.length > 0) {
      if (onError) onError();
      setAllEmptyFields(emptyFields);
      return;
    }
    window.location.href = `
      mailto:${EMAIL}
      ?body=${state.message}
      &subject=${encodeURI(state.name ?? "")} from ${encodeURI(state.company ?? "")}`;
    dispatch({ type: 'RESET' }); // Reset the form after submission
    if (callback) callback();
  };

  function _formReducer (state: ContactFormState, action: ContactFormAction) {
    switch (action.type) {
      case 'FIELD_CHANGE':
        return {
          ...state,
          [ action.fieldName ]: action.payload
        };
      case 'RESET':
        return INIT_STATE;
      default:
        return state;
    }
  }

  return {
    handleFormChange,
    handleFormSubmit,
    allEmptyFields,
    state,
  };
};


export default useContactForm;