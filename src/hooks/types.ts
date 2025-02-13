export type ContactFormInputs = keyof typeof INIT_STATE;

export type ContactFormState = {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
};

export type ContactFormAction = 
    | { type: 'FIELD_CHANGE'; fieldName: keyof ContactFormState; payload: string; }
    | { type: 'RESET'; };

export const INIT_STATE: ContactFormState = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
} as const;

export const CONTACT_FORM_NAME: ContactFormInputs[] = Object.keys(INIT_STATE) as ContactFormInputs[]
