class Controller {
  static async createTable(Entidade) {
    await Entidade.sync({ alter: true });
  }

  static async read(Entidade) {
    console.log(await Entidade.findAll());
  }

  static async add(Entidade, obj) {
    obj.forEach(async (value) => await Entidade.create(value));
  }

  static async delete(Entidade) {
    await Entidade.drop();
  }

  static async updated(Entidade, obj) {
    const entidade = await Entidade.findByPk(obj.id);
    entidade.update(obj);
  }
}

module.exports = Controller;
