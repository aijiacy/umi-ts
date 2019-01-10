import React, { PureComponent } from 'react';
import styles from './index.less';

export default class BasicLayout extends PureComponent {
	public render() {
		return (
			<div className={styles.normal}>
				<h1 className={styles.title}>Yay! Welcome to umi!</h1>
				{this.props.children}
			</div>
		);
	}
}
