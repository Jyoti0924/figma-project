import React, { useEffect, useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const Navigate = useNavigate();
const [data, setData] = useState([]);
const [data1, setData1] = useState({});
const fetchData=()=>{
    axios.get("https://training-project-8tay.onrender.com")
    .then((response) => {
        setData(response.data.Posts);
        console.log(response.data)
        
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

const handleEdit=(id)=>{
    axios.get(`https://training-project-8tay.onrender.com/${id}`)
    .then((response) => {
         setData1(response.data.Posts);
        console.log(response.data.Posts)
        
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
    Navigate('/form',{
        state:{
            data:data1.title
        }
    })
}
    useEffect(() => {
        // axios.get("https://training-project-8tay.onrender.com")
        //     .then((response) => {
        //         setData(response.data.Posts);
        //         console.log(response.data)
                
        //     })
        //     .catch((error) => {
        //         console.error("Error fetching data:", error);
        //     });
        fetchData();
    },[]);
    
    const handleDelete = (postId) => {
        console.log("==========",postId)
        axios.delete(`https://training-project-8tay.onrender.com/deletePost/${postId}`)
            .then(() => {
                console.log(`Post with ID ${postId} deleted.`);
                // Fetch data again to update the list after deletion
                fetchData();
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };
    const handleUpdate = (postId, updatedData) => {
        axios.patch(`https://training-project-8tay.onrender.com/updatePost/${postId}`, updatedData)
            .then(() => {
                console.log('Update successfully');
                fetchData(); // Fetch data again to update the list after update
            })
            .catch((error) =>{
                console.error('Update failed', error);
            });
    };
    
    return (
        <>
        <Header/>
            <section>
                <div class="AB">
                    <div class="container1">
                        <h3>Blog Posts</h3>
                    </div>
                    <div class="BC">
                        <div class="ABC">
                            {data.map((item) => {
                                return (
                                    <div class="parentBlog1" key={item._id}>
                                        <div class="IMAGE">
                                            <img class="img01" src="image/img01.png" alt="img01_img" />
                                             <button onClick={() => handleDelete(item._id)}>Delete</button>
                                             <button onClick={() => handleEdit(item._id)}>Edit</button>
                                             <button onClick={() => handleUpdate(item._id, {
                                                title: 'Updated Title',
                                                description: 'Updated Description'
                                            })}>Update</button>

                                        </div>
                                        <div class="heading1">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                        <div class="abcd">
                                            <hr /><div class="a">
                                                <img class="profileA" src="image/profileA.png" alt="profileA_img" />
                                            </div>
                                            <div class="b">
                                                <span><h2>Jott Dhiman</h2></span>
                                                <p>Jan 12,2022</p>
                                            </div>
                                            <div class="c">
                                                <i class="fa-regular fa-heart"></i>
                                                <span><label>03</label></span>
                                            </div>
                                            <div class="d">
                                                <i class="fa-regular fa-comment"></i>
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
<Footer/>

        </>
    )
}
export default Home;