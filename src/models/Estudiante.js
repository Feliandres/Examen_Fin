import mongoose from "mongoose";

const EstudianteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    cedula: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
        type: String,
        required: true,
      },
    ciudad: {
        type: String,
        required: true,
      },
    direccion: {
        type: String,
        required: true,
      },
    telefono: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Estudiante", EstudianteSchema);
