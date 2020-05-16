import React, { Component } from 'react'

export default class Positions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          positions: []
        };
      }
    
      componentDidMount() {
        fetch("http://vkovalov.me/wp-json/wp/v2/pages/17")
          .then(res => res.json())
          .then(res => res.acf)
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                positions: result.positions
              });
            },
            // Примітка: важливо обробляти помилки саме тут,
            // а не в блоці catch (), щоб не перехоплювати
            // виключення з помилок в самих компонентах.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          console.log(res)
      }
    
      render() {
        const { error, isLoaded, positions } = this.state;
        if (error) {
          return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Завантаження...</div>;
        } else {
          return (
            <ul>
              {position.map(position => (
                <li>
                  {position}
                </li>
              ))}
            </ul>
          );
        }
      }

  }