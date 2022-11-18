import React from 'react';
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postVideogame, getGenres, getPlatforms } from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = "Name is required";
      } else if (input.name.length > 50) {
        errors.name = "Name is too long";
      }
  
      if (!input.description) {
        errors.description = "Description is required ";
      } else if (input.description.length > 1500) {
        errors.description = "Description is too long. (Max = 1500 characters)";
      }
  
      if (!input.rating) {
        errors.rating = "Rating is required";
      } else if (input.rating > 5 || input.rating < 0) {
        errors.rating = "Rating must range between 0 to 5";
      }
  
      if (!input.released) {
        errors.released = "Date of release is required";
      } else if (input.released.length < 10) {
        errors.released = "Date of release is to long";
      }
      if (!input.img) {
        errors.img = "Image URL is required";
      }
  
      if (!input.genre[0]) {
        errors.genre = "Minimun one Genre is required ";
      }
  
      if (!input.platforms[0]) {
        errors.platforms = "Minimun one Platform is required";
      }
  
      return errors;
}

export default function VideogameCreate(){
    
}