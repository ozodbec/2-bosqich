// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createArticle } from "../features/counterSlice";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const CreateArticle = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.prevent.preventDefault();
//     dispatch(createArticle({ title, description }))
//       .unwrap()
//       .then(() => {
//         toast.success("Maqola muvaffaqiyatli qo‘shildi");
//         navigate("/");
//       })
//       .catch(() => {
//         toast.error("Xatolik yuz berdi");
//       });
//   };

//   return (
//     <div>
//       <h2>Maqola Yozish</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Sarlavha</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Tavsif</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Qo‘shish</button>
//       </form>
//     </div>
//   );
// };

// export default CreateArticle;
