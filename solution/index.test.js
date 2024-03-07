const { VehicleRegistrationSystem } = require('./index');

describe('VehicleRegistrationSystem', () => {
    let system;

    beforeEach(() => {
        system = new VehicleRegistrationSystem();
    });

    test('register a new vehicle', () => {
        system.register([ 'B', '345', 'BKL', 'Seretse', 'Goitsebeng', 'Maphiri', 'Khama' ]);
        expect(system.registrations.has('Seretse Goitsebeng Maphiri Khama')).toBe(true);
        expect(system.registrations.get('Seretse Goitsebeng Maphiri Khama')).toBe('B 345 BKL');
    });

    test('issue a new plate number', () => {
        const newPlate = system.issue([ 'B', '345', 'BKL', 'Seretse', 'Goitsebeng', 'Maphiri', 'Khama' ]);
        expect(newPlate).toBe('B 346 BKL');
    });

    test('issue ceiling reached', () => {
        const newPlate = system.issue([ 'B', '999', 'ZZZ', 'Seretse', 'Goitsebeng', 'Maphiri', 'Khama' ]);
        expect(newPlate).toBe('error');
    });

    test('increment letters correctly', () => {
        expect(system.incrementLetters('ABZ')).toBe('ACA');
        expect(system.incrementLetters('ZZZ')).toBe('error');
    });
});