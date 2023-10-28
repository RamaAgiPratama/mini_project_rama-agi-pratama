import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/review.css";

const Reviews = () => {
  const [inputRating, setInputRating] = useState("");
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://65395aafe3b530c8d9e84f6c.mockapi.io/items")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleRatingChange = (e) => {
    setInputRating(e.target.value);
  };

  const handleAddData = () => {
    if (inputRating.trim() !== "") {
      if (editing) {
        // Jika sedang dalam mode Edit, perbarui data
        axios
          .put(`https://65395aafe3b530c8d9e84f6c.mockapi.io/items/${editId}`, {
            rating: inputRating,
          })
          .then(() => {
            fetchData();

            setInputRating("");
            setEditing(false);
            setEditId(null);
          })
          .catch((error) => {
            console.error("Error updating data: ", error);
          });
      } else {
        // Jika tidak dalam mode Edit, tambahkan data baru
        axios
          .post("https://65395aafe3b530c8d9e84f6c.mockapi.io/items", {
            rating: inputRating,
          })
          .then(() => {
            fetchData();

            setInputRating("");
          })
          .catch((error) => {
            console.error("Error adding data: ", error);
          });
      }
    }
  };

  const handleEdit = (id, rating) => {
    setInputRating(rating);
    setEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://65395aafe3b530c8d9e84f6c.mockapi.io/items/${id}`)
      .then(() => {
        fetchData();
        setEditing(false);
        setEditId(null);
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  return (
    <>
      <div className="rating">
        <h1 className="mt-5 mb-3">Data Ulasan</h1>

        <input
          className="input__rating mb-4"
          type="text"
          placeholder="Silahkan rating disini..."
          value={inputRating}
          onChange={handleRatingChange}
        />
        <button className="btn rating__btn" onClick={handleAddData}>
          {editing ? "Perbarui" : "Tambah Ulasan"}
        </button>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="data-item">
              {item.rating}
              <button
                className="delete-button primary__btn "
                onClick={() => handleEdit(item.id, item.name, item.rating)}
              >
                Edit
              </button>
              <button
                className="delete-button primary__btn"
                onClick={() => handleDelete(item.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
