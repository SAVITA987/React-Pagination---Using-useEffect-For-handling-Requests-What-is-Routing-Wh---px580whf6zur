import React from 'react'
import Button from './Button';
const PaginationButtonsList = ({page, handlePage}) => {
    const BtnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <div className="pagination-buttons-list">
            {
                BtnArr.map(btn => <Button id={`button-${btn}`} key={btn} text={btn} page={page} handlePage={handlePage}/>)
            }
        </div>
    )
}

export default PaginationButtonsList
