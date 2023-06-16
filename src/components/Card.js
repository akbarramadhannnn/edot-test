import React, { memo } from "react";
import Button from "../components/Button";

const Card = ({ image, like, handleLikeCard, handleDislikeCard }) => {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: 400,
        marginBottom: 30,
        width: "100%",
        borderRadius: 15,
      }}
    >
      <img
        src={image}
        alt={`Images`}
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
        }}
      >
        <span
          style={{
            padding: "5px 5px",
            border: "1px solid #000",
          }}
        >
          {like} Like
        </span>

        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: 20,
            }}
          >
            <Button onClick={handleLikeCard} color="blue">
              Like
            </Button>
          </div>

          <Button onClick={handleDislikeCard} color="red">
            Dislike
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
