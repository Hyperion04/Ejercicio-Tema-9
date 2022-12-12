class Persona {
  #name;
  #age;
  #phoneNumber

  setPerson(name, age, phoneNumber) {
    this.#name = name;
    this.#age = age;
    this.#phoneNumber  = phoneNumber;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getPhoneNumber() {
    return this.#phoneNumber;
  }

}

class Cliente extends Persona {
  #credito;

  setCredito(credito) {
    this.#credito = credito;
  }

  getCredito() {
    return this.#credito;
  }
}

class Trabajador extends Persona {
  #salario;

  setSalario(salario) {
    this.#salario = salario;
  }

  getSalario() {
    return this.#salario;
  }
}

const c = new Cliente();

c.setPerson('John Doe', 27, 116845917);
c.setCredito(100)

console.log('Cliente')
console.log(c.getName());
console.log(c.getAge());
console.log(c.getPhoneNumber());
console.log(c.getCredito());

const t = new Trabajador();

t.setPerson('James Doe', 24, 113978163);
t.setSalario(200)

console.log('Trabajador')
console.log(t.getName());
console.log(t.getAge());
console.log(t.getPhoneNumber());
console.log(t.getSalario());