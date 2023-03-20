
import {createGlobalStyle} from "styled-components";

export const GlobaltStyle = createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;

}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
}
h1 {
  color:rgb(50,20,0);
  font-size: 4rem;
  font-weight: 700;
}
 h2 {
   color: rgb(50,20,0);
   font-size: 4.4rem;
   font-weight: 700;
   white-space: normal;
  
  }
h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
${"" /* resuable code section  */}
.container {
  max-width: 110rem;
  margin: 0 auto;
 
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
.common-heading{
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  font-size:25px;
  font-weight:700;
  background-color:rgb(210,220,240);
  width:370px;
  margin-left:33%;
  height:40px;
  box-shadow:0px 1px 2px 1px rgb(1,1,1,0.7);

}
     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }
   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: capitalize;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color:rgba(17, 54, 167, 0.904); 
    color:whitesmoke;
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 2.3rem;
    font-weight:700;
    cursor: pointer;
    }
@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
 
  }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
  .common-heading{
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  font-size:25px;
  font-weight:700;
  background-color:rgb(210,220,240);
  width:370px;
  margin-left:20%;
  height:40px;
  box-shadow:0px 1px 2px 1px rgb(1,1,1,0.7);

}
    }
`;