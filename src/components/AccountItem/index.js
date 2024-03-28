import styles from '~/components/AccountItem/AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d303ab1bca70c4ff7c107394eaa30b07.jpeg?lk3s=a5d48078&x-expires=1704913200&x-signature=BJNq0l7rqEiOhQpc85vnyhEGH%2BQ%3D"
                alt="Linh"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Tran Thi Tuyet Linh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>quacamtron</span>
            </div>
        </div>
    );
}

export default AccountItem;
