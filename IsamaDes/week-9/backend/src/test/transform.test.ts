import { transformCustomer } from '../services/transform';


test('transforms legacy customer to modern shape', () => {
const legacy = { id: 1, name: 'Jane Doe', email: 'jane@example.com', phone: '123' };
const m = transformCustomer(legacy as any);
expect(m.customerId).toBe(1);
expect(m.fullName).toBe('Jane Doe');
expect(m.contact.email).toBe('jane@example.com');
});