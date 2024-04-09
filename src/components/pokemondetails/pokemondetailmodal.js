import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export function PokemonDetailModal({ pokemon,handleKnowMore }) {
  const { name, height, weight, stats, imageUrl, type } = pokemon;
  return (
    <div
      className={`${type}`}
      style={{
        position: "fixed",
        padding: 40,
        borderRadius: 20,
        backgroundColor: "white",
        display: "flex",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "coloumn",
        }}
      >
        <img className="pokemon-image" src={imageUrl} alt={name} />
        <h3 className="pokemon-name">{name.toUpperCase()}</h3>
      </div>

      <div style={{ display: "flex", gap: 40 }}>
        <div>
          <h3>Weight:{weight}</h3>
          <h3>Height:{height}</h3>
        </div>

        <div>
          {stats.map((stat, index) => {
            return (
              <h4 key={"stat" + index}>
                Stat{index + 1}:{stat.name}
              </h4>
            );
          })}
        </div>

        <div>
          {stats.map((stat, index) => {
            return (
              <h4 key={"bs" + index}>
                Bs{index + 1}:{stat.bs}
              </h4>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 50,
          position: "absolute",
          top: 20,
          right: 20,
          color:"white",
          cursor:"pointer",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
        onClick={()=>{handleKnowMore()}}
      >
        x
      </div>
    </div>
  );
}
