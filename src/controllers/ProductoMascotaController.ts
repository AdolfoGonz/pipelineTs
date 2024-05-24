import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";
import ProductoMascotaModel from "../modelsNoSQL/ProductoMascotaModel";

class ProductoMascotaController extends AbstractController {
  //Singleton
  //Atributos de clase
  private static _instance: ProductoMascotaController;
  public static get instance(): ProductoMascotaController {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new ProductoMascotaController("producto");
    return this._instance;
  }

  protected initializeRoutes(): void {
    this.router.get("/test", this.getTest.bind(this));
    this.router.post("/crear", this.postCrearPelicula.bind(this));
    this.router.get("/consultar", this.getConsultaPelicula.bind(this));
  }
  private async getConsultaPelicula(req: Request, res: Response) {
    try {
      const deptos = await ProductoMascotaModel.scan().exec().promise();
      res.status(200).send(deptos[0].Items);
      console.log(deptos);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error al consultar productos");
    }
  }

  private async postCrearPelicula(req: Request, res: Response) {
    try {
      console.log(req.body);
      await ProductoMascotaModel.create(req.body);
      console.log("Producto creada");
      res.status(200).send("Producto creada");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error al crear producto");
    }
  }

  private async getTest(req: Request, res: Response) {
    try {
      console.log("ProductoMascotaController works");
      res.status(200).send("ProductoMascotaController works");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error en ProductoMascotaController");
    }
  }
}

export default ProductoMascotaController;
