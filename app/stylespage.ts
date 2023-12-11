import styled from 'styled-components';
import theme from './theme';


export const Container = styled.div`

`;

export const CardContent = styled.div`
.principalContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30%;
  background: ${theme.colors.background};  
}

.Cardsalign {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.campaign-card {
  margin: 10px;
  padding: 20px;
  width: 20%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1); 
  justify-content: center;
  align-items: center;
   /*  border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
}

.base-container {
  font-size: 20px;
	color: white;
  font-weight: bold;
  text-align: center;
}

h3 { 
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
}

p {
  color: white;
}

.campaign-card:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.campaign-card.clicked {
  background: rgba(255, 255, 255, 0.1); 
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
}

/* Estilo dos detalhes de campanha expandidos */
.campaign-percentages {
  display: none;
}

.campaign-card.clicked .campaign-percentages {
  display: block;
  margin-top: 10px;
}

.percentage-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconde o conteúdo que transborda */
  text-overflow: ellipsis; /* Mostra "..." para indicar que o texto foi cortado */
  white-space: nowrap; 
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}

h1 {
  margin-bottom: 3%;
}

.percentage-item h3 {
  margin: 10px;
  font-size: 16px;
  margin: 5px 0;
}

.com-aviso {
  border: 2px solid red;
  box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;
}

.com-aviso-item {
  border: 2px solid red;
}

/* Estilos para porcentagens */
.porcentagem-vermelha {
  color: red;
  font-weight: bold;
}

.porcentagem-verde {
  color: green;
  font-weight: bold;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-self: center;
  align-items: center;
  align-content: center;
  background: #fff; 
  padding: 20px 15px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  margin-bottom: 3%;
  flex-wrap: wrap;
  gap: 10px;
}

.link {
  width: 20%;
  justify-content: left;
  display: flex;
  margin-left: 100px;
  flex-direction: row;
  margin-bottom: 10px;
  letter-spacing: 5px;
  gap: 15px;
}

.nav-links:hover {
  box-shadow: 0 0 8px #fd0018, 0 0 35px #fd0018, 0 0 60px #fd0018;
}

.nav-links li{
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: black;
  font-size: 25px;
  font-family:'open_sansregular';  
  font-weight: bold;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: red;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}

.logo {
  display: flex;
  max-height: 150px;
  width: 30%;
  margin-left: 100px;
  height: auto;
  justify-content: left;
  align-content: center;
  align-items: center;
}

input {
  color: black;
  padding: 15px 25px;
}

.filters {
  display: flex;
  flex-direction: column;
}

.newfunctionalities {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.newfunctionalities input {
  margin-right: 10px;
  padding: 10px 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Adiciona transição para a borda e a sombra */
}

.newfunctionalities label {
  color: black;
      margin-right: 1px;
      cursor: pointer;
      margin-right: 20px;
      letter-spacing: 2px;
      font-weight: 500;

      &:checked {
        color: #007bff;
      }
}

.newfunctionalities button {
  color: white;
	background: red;
}

.newfunctionalities button:hover
{
	color: white;
	background: red;
	transition-delay: 1s;
}

.letter-checkboxes {
   display: flex;
   flex-direction: row;
   transitions: 1.5s;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-label {
  margin-right: 10px;
}

.checkbox-input {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #fd0018;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checkmark {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: #fd0018; /* Cor do "check" quando marcado */
  display: none;
}

.custom-checkbox.checked .checkmark {
  display: block;
}

.checkbox-input:checked + .custom-checkbox {
  background-color: #fd0018; /* Cor de fundo quando marcado */
  transition: background-color 0.2s ease-in-out; /* Adiciona transição para a cor de fundo */

}

/*--Button Styles--*/
.btn-slice {
  padding: 1.0rem 0.4rem;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  position: relative;
  
  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
}

.btn-slice .top  {
  position: relative;
  height: 6px;
  overflow: hidden;
  top: 0;
  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
  
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s;
}

.btn-slice .bottom  {
  position: relative;
  height: 6px;
  overflow: hidden;
  bottom: 0;
  -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

  -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
  transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
  
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s;
}

.btn-slice .bottom span {
  top: -6px;
  position: absolute;
  left: 0;
}

.btn-slice:hover .top {
  top: -5px;
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s; 
}

.btn-slice:hover .bottom {
  bottom: -5px;
  -webkit-transition-delay:0.35s;     
  -moz-transition-delay::0.35s; 
  -ms-transition-delay::0.35s;     
  -o-transition-delay::0.35s;     
  transition-delay::0.35s; 
}
.btn-slice:hover, .btn-slice:focus, .btn-slice:active {
  margin-left: 10px;
}
.btn-slice:before{
  content: '';
  height: 1px;
  width: 60px;
  background-color: black;
  position: absolute;
  margin-top: 6px;
  right: -35px;
  
  -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

  -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
  transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
}
.btn-slice:hover:before{
  width: 130%;
}
`