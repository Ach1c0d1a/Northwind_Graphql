import mongoose from "mongoose";

const Bugis = mongoose.model('Bugis');
const Lotes = mongoose.model('Lotes');
const Recepciones = mongoose.model('Recepciones');
const Guias = mongoose.model('Guias');

export const resolvers = {
	Query: {
		bugis: async () => await Bugis.find(),
		bugi:  async (parent, { BugiID }) => await Bugis.findOne({BugiID: BugiID}),

		lotes: async () => await Lotes.find(),
		lote:  async (parent, { LoteID }) => await Lotes.findOne({LoteID: LoteID}),

		recepciones: async () => await Recepciones.find(),
		recepcion: async (parent, { RecepcionID }) => await Recepciones.findOne({RecepcionID: RecepcionID}),

		guias: async () => await Guias.find(),
		guia: async (parent, { GuiaID }) => await Guias.findOne({GuiaID: GuiaID})
	},
	Bugis: {
		Lote: async (parent) => await Lotes.findOne({LoteID: parent.LoteID})
	},
	Lotes: {
		Recepciones: async (parent) => await Recepciones.find({ LoteID: parent.LoteID })
	},
	Guias: {
		Recepciones: async (parent) => await Recepciones.find({ GuiaID: parent.GuiaID })
	},
	Recepciones: {
		Lote: async (parent) => await Lotes.findOne({LoteID: parent.LoteID}),
		Guia: async (parent) => await Guias.findOne({GuiaID: parent.GuiaID}),
		Bugis: async (parent) => await Bugis.find({ BugiID: parent.BugiID })
	},
	Mutation: {
		addBugi: async (parent, args) => {
			const newBugi = new Bugis(args);
				return newBugi.save();
		},
		addLote: async (parent, args) => {
			const newLote = new Lotes(args);
				return newLote.save();
		},
		addRecepcion: async (parent, args) => {
			const newRecepcion = new Recepciones(args);
	           	return newRecepcion.save();
		},
		addGuia: async (parent, args) => {
			const newGuia = new Guias(args);
	           	return newGuia.save();
		},
		updateBugi: async (parent, args) => {
			const { BugiID, ...rest } = args;
				return Bugis.findOneAndUpdate({BugiID: BugiID}, rest, { new: true });
		},
		updateLote: async (parent, args) => {
			const { LoteID, ...rest } = args;
				return Lotes.findOneAndUpdate({LoteID: LoteID}, rest, { new: true });
		},
		updateRecepcion: async (parent, args) => {
			const { RecepcionID, ...rest } = args;
				return Recepciones.findOneAndUpdate({RecepcionID: RecepcionID}, rest, { new: true });
		},
		updateGuia: async (parent, args) => {
			const { GuiaID, ...rest } = args;
				return Guias.findOneAndUpdate({GuiaID: GuiaID}, rest, { new: true });
		},
		deleteBugi: async (parent, { BugiID }) => {
			return Bugis.findOneAndDelete({BugiID: BugiID});
		},
		deleteLote: async (parent, { LoteID }) => {
			return Lotes.findOneAndDelete({LoteID: LoteID});
		},
		deleteRecepcion: async (parent, { RecepcionID }) => {
			return Recepciones.findOneAndDelete({RecepcionID: RecepcionID});
		},
		deleteGuia: async (parent, { GuiaID }) => {
			return Guias.findOneAndDelete({GuiaID: GuiaID});
		}
	}
}
	