// Entities and their relationship

enum Role {
    journeyOfficer = 'journeyOfficer',
    inspector = 'inspector',
    manager = 'manager',
    admin = 'admin',
}

interface Employee {
    name: string;
    role: Role;
    supervisor: boolean;
}

interface Issue {
    truck: Truck;
    tyre: boolean;
    gear: boolean;
    engine: boolean;
    inspection: boolean;
    comment: string;
    resolved: boolean;
    modifier: Employee;
}

interface Truck {
    no: number;
    odometer: number;
    currentIssue: Issue;
    issues: Issue[];
    inMine: boolean;
    inJourney: boolean;
    inMaintenance: boolean;
}

interface Status {
    fleet: Fleet;
    truck?: Truck;
    location: string;
    timestamp: Date;
    issues: string;
    comment: string
}

interface Fleet {
    journey: Journey;
    loadedDeparture: Date;
    loadedArrival: Date;
    deliveredDeparture: Date;
    deliveredArrival: Date;
    trucks: Truck[];
    journeyOfficer: Employee;
    statuses: Status[];
}

interface Journey {
    start: Date;
    end: Date;
    officer: Employee;
    fleets: Fleet[];
}

interface Inspection {
    date: Date;
    truck: Truck;
    inspector: Employee;
}
