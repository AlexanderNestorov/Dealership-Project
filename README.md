# Dealership

An auto dealership Angular project foe the Angular course at Softuni

## Techologies

The following technologies are used in this project:

- Client-side: Angular.
- Server-side: Spring(Java).
- Database: MySQL.

## Main idea

The main logic of the app is to manage an auto dealership, where users can upload and review car listings.
Users can upload their own listings or leave reviews for other users to see. The admin can edit/delete all content and upload/edit/delete new locations in the Locations component.

## Application parts

- Public part: Homepage, About page, Login, Register and Locations page
- Private part: New Listing, Reviews, Catalogue, Profile

## Application components

 - Core Module:
   - Header Component: the navbar for the site, which changes if a user is logged / not logged
   - Footer Component: basic footer component
   - Not-Found Component: A "404" page for non-existing paths
 - Home Module:
    - About Component: a basic about page with a link to register
    - Home Component: the home page of the site if a user is logged
    - Home-Not-Found Component: the home page of the site if a user is not logged
 - Listing Module:
   - Create Component: a form for creating a new listing
   - All Component: the catalogue page where all listings are shown
   - Details Component: a page for a listing's details
   - Listing-Home Component: if a user is logged show the most expensive cars
   - Listing Item Component: listing component to be shown in other pages
 - Location Module:
   - Location Component: A page with a google maps element for displaying offices
   - Location Item: location component to be shown in other pages
 - Review Module:
   - Review-Home Component: A page where you can view and leave a review
   - Review Item: review component to be shown in other pages
 - User Module:
   - Login Component: A basic login form
   - Register Component: A basic registration form
   - Profile Component: A profile page for the current user where owned listings and reviews are shown

## Additional technologies/services used:

Cloudinary API: for storing the pictures;
