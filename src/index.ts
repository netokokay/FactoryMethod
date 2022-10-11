interface IComputer {
    ram: number;
    hdd: number;
    cpu: number;
    type: "pc" | "server";
}

class Computer implements IComputer {
    ram: number;
    hdd: number;
    cpu: number;
    type: "pc" | "server";

constructor(ram: number, hdd: number, cpu: number, type: "pc" | "server") {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
}


getRam() {
    return `${this.cpu}GB`;
}

getHdd() {
    return `${this.hdd}GB`;
}

getCpu() {
    return `${this.cpu}Ghz`;
}

getType() {
    return this.type;
}

toString() {
    return `Ram: ${this.ram} | Hdd: ${this.hdd} | Cpu: ${this.cpu} | Tipo: ${this.type}`;
    }
}

class Pc extends Computer {
    constructor(ram: number, hdd: number, cpu: number) {
        super(ram, hdd, cpu, "server");
    }
}

class Server extends Computer{
    constructor(ram: number, hdd: number, cpu: number){
        super(ram,hdd,cpu, "server")
    }
}

class ComputerFactory {
    static createComputer(ram: number, hdd: number, cpu: number, type: "pc" | "server")  {
        if(type = "pc") {
            return new Pc(ram, hdd, cpu);
        } 
        else if(type = "server") {
            return new Server(ram, hdd, cpu);
        } else {
            return new Pc(ram, hdd, cpu);
        }
    }
}

const pc1 = ComputerFactory.createComputer(4, 128, 3, "pc");
const pc2 = ComputerFactory.createComputer(8, 511, 4, "pc");
const server1 = ComputerFactory.createComputer(512, 256000, 50, "server");

console.log(pc1.toString(), "PC 1");
console.log(pc2.toString(), "PC 2");
console.log(server1.toString(), "Server 1");