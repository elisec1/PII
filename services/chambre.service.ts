import React from "react";
import Chambre from "../models/Chambre";

export interface Room {
  id_chambre: number;
  etage_chambre: number;
  type_chambre: number;
}

class ChambresDataService {
  getAll(): Promise<Array<Chambre>> {
    return this.fetchFromApi("http://192.168.0.37:3000/chambre").then((rooms) =>
      this.createChambres(rooms)
    );
  }

  private fetchFromApi(query: string): Promise<Array<Room>> {
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse.rooms || [])
        .catch((error) => {
          console.error(error);
        })
    );
  }

  private createChambre(room: Room) {
    return new Chambre(room.id_chambre, room.etage_chambre, room.type_chambre);
  }

  private createChambres(rooms: Array<Room>): Array<Chambre> {
    // Create cocktails
    return rooms.map((room) => this.createChambre(room));
  }
}

export default new ChambresDataService();
