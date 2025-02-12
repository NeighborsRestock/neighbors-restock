import { EMAIL } from "@/config/constants";
import { ChangeEvent, FormEvent, useReducer } from "react";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type ContactFormAction = | { type: 'FIELD_CHANGE'; fieldName: keyof ContactFormState; payload: string; }
  | { type: 'RESET'; };

const initState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

const useContactForm = () => {
  const [ state, dispatch ] = useReducer(formReducer, initState);

  function handleFormChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback?: () => void) {
    if (callback) callback();
    dispatch({
      type: 'FIELD_CHANGE',
      fieldName: e.target.name.toLocaleLowerCase() as keyof ContactFormState,
      payload: e.target.value,
    });
  };

  function handleFormSubmit (e: FormEvent): void {
    e.preventDefault();
    console.log('Email submitted:', state);
    window.location.href = `
              mailto:${EMAIL}?body=${state.message}&subject=${encodeURI(state.name ?? "")} from ${encodeURI(state.company ?? "")}`;
    // You can send the data to an API here
    dispatch({ type: 'RESET' }); // Reset the form after submission
  };

  function formReducer (state: ContactFormState, action: ContactFormAction) {
    switch (action.type) {
      case 'FIELD_CHANGE':
        return {
          ...state,
          [ action.fieldName ]: action.payload
        };
      case 'RESET':
        return initState;
      default:
        return state;
    }
  }

  return {
    handleFormChange, handleFormSubmit, state
  };
};


export default useContactForm;