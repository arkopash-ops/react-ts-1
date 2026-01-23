export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    gender: "male" | "female";
    address: string;
    city: string;
    state: string;
    zip: string;
    agreed: boolean;
};

export interface StoredUser {
    email: string;
    password: string;
};
