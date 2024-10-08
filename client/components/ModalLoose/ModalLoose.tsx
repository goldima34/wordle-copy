import React from 'react';
import "./ModalLoose.scss"

interface ModalLooseProps{
    word: string[],
    attemps: number
}

const ModalLoose: React.FC<ModalLooseProps> = ({word, attemps}) => {
    const restartClick = () =>{
        window.location.reload()
    }
    return (
        <div className='Wrapper'>
            <div className="Container">
                <p className="Header">Better luck next time!</p>
                <p className="">Word: {word}</p>
                <p className="">Attemps: {attemps}</p>
                <div className="restart" onClick={() => restartClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72">
                        <path d="M 34.099609 7.0019531 C 33.029594 6.94575 32 7.7786875 32 8.9921875 L 32 12.339844 C 20.664873 14.250415 12 24.129249 12 36 C 12 49.234 22.767 60 36 60 C 49.233 60 60 49.234 60 36 C 60 30.33 57.985125 24.827859 54.328125 20.505859 C 52.898125 18.818859 50.374406 18.606156 48.691406 20.035156 C 47.004406 21.462156 46.793703 23.986828 48.220703 25.673828 C 50.657703 28.552828 52 32.22 52 36 C 52 44.822 44.822 52 36 52 C 27.178 52 20 44.822 20 36 C 20 28.561394 25.110881 22.310779 32 20.527344 L 32 23.005859 C 32 24.624859 33.829484 25.566 35.146484 24.625 L 44.951172 17.617188 C 46.061172 16.824188 46.061172 15.173859 44.951172 14.380859 L 35.146484 7.3730469 C 34.817234 7.1377969 34.456281 7.0206875 34.099609 7.0019531 z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ModalLoose;
