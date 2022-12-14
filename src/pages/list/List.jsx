import './list.css';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

    const location = useLocation();
    const [ destination, setDestination ] = useState(location.state.destination);
    const [ date, setDate ] = useState(location.state.date);
    const [ options, setOptions ] = useState(location.state.options);
    const [ openDate, setOpenDate ] = useState(false);

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="listItem">
                            <label>Check-in date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {
                                openDate &&
                                        <DateRange 
                                        onChange={(item) => setDate([item.selection])}
                                        minDate={new Date()}
                                        ranges={date}
                                        />
                            }
                        </div>
                        <div className="listItem">
                            <label>Options</label>
                            <div className="listOptions">
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input className="listOptionInput" type="number" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input className="listOptionInput" type="number" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Adult
                                    </span>
                                    <input className="listOptionInput" type="number" min={1} placeholder={options.adult}/>
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Children
                                    </span>
                                    <input className="listOptionInput" type="number" min={0} placeholder={options.children}/>
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Room
                                    </span>
                                    <input className="listOptionInput" type="number" min={1} placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResults">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;