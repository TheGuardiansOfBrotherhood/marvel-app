import * as React from 'react';

import './footer.css';

export class Footer extends React.Component {
	render() {
		return (
            <footer className="footer red">
                <div className="row col-1">
                    <div>
                        © Todos os direitos reservados
                    </div>
                </div>
                <div className="row red-700 col-1">
                    <div>
                        Feito com <a className="red-700" target="_blank" href="//github.com/TheGuardiansOfBrotherhood/BrotherhoodCSS">Brotherhood CSS</a>
                    </div>
                </div>
            </footer>
		);
	}
}