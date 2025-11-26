import { LegacyCustomer } from "./legacyClient";

type ModernCustomer = {
    customerId: string,
    fullName: string,
    username?: string,
    contact: {email?: string, phone?: string};
};

export function transformCustomer(legacy: LegacyCustomer): ModernCustomer{
return {
    customerId: legacy.id,
    fullName: legacy.name,
    username: legacy.username,
    contact: {email: legacy.email, phone: legacy.phone},
}
};

export function transformCustomers(list: LegacyCustomer[]): ModernCustomer[]{
    return list.map(transformCustomer);
    
}

