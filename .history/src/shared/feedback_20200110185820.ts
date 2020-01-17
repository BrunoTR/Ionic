export interface Feedback {
    firstName: string;
    lastName: string;
    telNum: string;
    email: string;
    agree: boolean;
    contactType: string;
    message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];
