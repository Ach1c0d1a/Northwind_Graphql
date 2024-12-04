export const typeDefs = `#graphql
	type Bugis {
		BugiID: Int!,
		Hora_Ini_Envase: String!, 
		LoteID: ID!,
		Lote: Lotes!,
		TempEnvasado: Float!	
	}

	type Lotes {
		LoteID: Int!,
    	FechaLlegada: String!,
    	TempPlanta: Float!,
    	HoraI_Descarga: String!,
    	HoraF_Descarga: String!,
    	TempSalida: Float!,
    	Recepciones: [Recepciones]!
	}

	type Recepciones {
		RecepcionID: String!,
		Especie: String!,
		PesoEntrada: Float!,
		PesoSalida: Float!,
		TempRecepcion: Float!,
		CamaraSalida: String!,
		CodDescarga: String!,
		GuiaID: ID!,
		Guia: Guias!,
		LoteID: ID!,
		Lote: Lotes!,
		Bugis: [Bugis]!
	}

	type Guias {
		GuiaID: Int!,
		FechaEnvio: String!,
		Placa: String!,
		Recepciones: [Recepciones]!
	}

	type Query {
		bugis: [Bugis]!
		bugi(BugiID: Int!): Bugis,  

		lotes: [Lotes]!,
		lote(LoteID: Int!): Lotes,     
		
		recepciones: [Recepciones]!,
		recepcion(RecepcionID: String!): Recepciones,

		guias: [Guias]!,
		guia(GuiaID: Int!): Guias
	}
    
    type Mutation {
		addBugi(BugiID: Int!, Hora_Ini_Envase: String!, LoteID: ID!, TempEnvasado: Float!): Bugis,
		addLote(LoteID: Int!, FechaLlegada: String!, TempPlanta: Float!, HoraI_Descarga: String!, HoraF_Descarga: String!,  TempSalida: Float!): Lotes,
		addRecepcion(RecepcionID: String!, Especie: String!, PesoEntrada: Float!, PesoSalida: Float!, TempRecepcion: Float!, CamaraSalida: String!, CodDescarga: String!, GuiaID: ID!, LoteID: ID!): Recepciones,
		addGuia(GuiaID: Int!, FechaEnvio: String!, Placa: String!): Guias

		updateBugi(BugiID: Int!, Hora_Ini_Envase: String!, LoteID: ID!, TempEnvasado: Float!): Bugis,
		updateLote(LoteID: Int!, FechaLlegada: String!, TempPlanta: Float!, HoraI_Descarga: String!, HoraF_Descarga: String!,  TempSalida: Float!): Lotes,
		updateRecepcion(RecepcionID: String!, Especie: String!, PesoEntrada: Float!, PesoSalida: Float!, TempRecepcion: Float!, CamaraSalida: String!, CodDescarga: String!, GuiaID: ID!, LoteID: ID!): Recepciones,
		updateGuia(GuiaID: Int!, FechaEnvio: String!, Placa: String!): Guias	

		deleteBugi(BuguiID: Int!): Bugis,	
		deleteLote(LoteID: Int!): Lotes,
		deleteRecepcion(RecepcionID: String!): Recepciones,
		deleteGuia(GuiaID: Int!): Guias		
	}
`;
