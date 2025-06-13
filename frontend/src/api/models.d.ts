export interface Business {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    address: string;
    city: string;
    phoneNumber?: string;
    email?: string;
    imageUrl?: string;
    createdAt: string;
}