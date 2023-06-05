import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    
    const [tareas] = await pool.query("SELECT * FROM tarea");
    res.json(tareas);
  } catch {
    return res.status(500).json({ mensaje: "error 400, no se pudo consultar a la base de datos " });
  }
};

export const getTareasById = async (req, res) => {
  try {
    console.log(req.params.id);
    const [tareaId] = await pool.query("SELECT * FROM tarea WHERE id=?", [
      req.params.id,
    ]);
    if (tareaId.length <= 0) {
      return res.status(400).json({ error: "El parámetro id no es inválido" });
    } else {
      res.json(tareaId[0]);
    }
  } catch {
    return res.status(500).json({ mensaje: "ERROR del servidor" });
  }
};

export const createTarea = async (req, res) => {
  try {
    const { asunto, descripcion, autor, fechaInicio, fechaFinal, estado } =
      req.body;
    const [tarea] = await pool.query(
      "INSERT INTO tarea (asunto, descripcion, autor, fechaInicio, fechaFinal, estado) VALUES (?, ?, ?, ?, ?, ?)",
      [asunto, descripcion, autor, fechaInicio, fechaFinal, estado]
    );

    if (tarea) {
      // Enviar el objeto en formato JSON con estado 200 (OK)
      res.status(200).json({
        msg: "tarea creada",
        id: tarea.insertId,
        asunto,
        descripcion,
        autor,
        fechaInicio,
        fechaFinal,
        estado,
      });
    } else {
      // Enviar un mensaje de error con estado 404 (Not Found)
      res.status(404).json({ error: "No se encontraron datos" });
    }
  } catch {
    return res.status(500).json({ mensaje: "ERROR del servidor" });
  }
};

export const deleteTarea = async (req, res) => {
  try {
    const [tareadelete] = await pool.query("DELETE FROM tarea WHERE id=?", [
      req.params.id,
    ]);
    if (tareadelete.affectedRows <= 0)
      return res.status(400).json({ error: "Tarea no emcomtrada" });
    res.json({
      mensaje: "Tarea eliminada",
    });
  } catch {
    return res.status(500).json({ mensaje: "ERROR del servidor" });
  }
};

export const updateTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { asunto, descripcion, autor, fechaInicio, fechaFinal, estado } =
      req.body;
    const [tareaToEdit] = await pool.query(
      "UPDATE tarea SET asunto=IFNULL(?, asunto), descripcion=IFNULL(?,descripcion), autor=IFNULL(?, autor), fechaInicio=IFNULL(?,fechaInicio), fechaFinal=IFNULL(?, fechaFinal), estado=IFNULL(?, estado) WHERE id=?",
      [asunto, descripcion, autor, fechaInicio, fechaFinal, estado, id]
    );

    if (tareaToEdit.affectedRows === 0)
      return res.status(404).json({
        mensaje: "tarea no encontrado",
      });
    const [tareamodified] = await pool.query("SELECT * FROM tarea WHERE id=?", [
      id,
    ]);
    res.json(tareamodified[0]);
  } catch {
    return res.status(500).json({ mensaje: "ERROR del servidor" });
  }
};
