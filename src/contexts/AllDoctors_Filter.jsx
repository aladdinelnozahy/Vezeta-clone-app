import React, { createContext, useState, useEffect, useReducer } from 'react';

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [examination, setExamination] = useState('');

  const [gender, setGender] = useState([
    { name: 'female', value: false },
    { name: 'male', value: false },
  ]);
  const [entity, setEntity] = useState([
    { name: 'hospital', value: false },
    { name: 'clinic', value: false },
  ]);
  const [availability, setAvailability] = useState([
    { name: 'any', value: false },
    { name: 'today', value: false },
    { name: 'tomorrow', value: false },
  ]);
  const [title, setTitle] = useState([
    { name: 'professor', value: false },
    { name: 'lecturer', value: false },
    { name: 'consultant', value: false },
    { name: 'specialist', value: false },
  ]);
  const initialHomeSearchState = [
    { name: 'specialty', value: false },
    { name: 'city', value: false },
    { name: 'doctorName', value: false },
  ];
  const [homeSearch, setHomeSearch] = useState(initialHomeSearchState);
  const [titleArr, setTitleArr] = useState([]);
  const handleAvailableTitle = () => {
    setTitleArr(title.filter((title) => title['value'] === true));
  };

  const [filter, setFilter] = useState([
    { name: 'title', value: [] },
    { name: 'availability', value: [] },
    { name: 'entity', value: [] },
    { name: 'gender', value: [] },
    { name: 'examination', value: '' },
    { name: 'homeSearch', value: [] },
  ]);
  //   useEffect for homeSearch
  useEffect(() => {
    let truthyValue = homeSearch.filter((hSearch) => hSearch['value'] == true);
    let newFilter = [...filter]; // copying the old datas array
    newFilter[5]['value'] = truthyValue; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [homeSearch]);
  //   useEffect for title
  useEffect(() => {
    let truthyValue = title.filter((title) => title['value'] == true);
    let newFilter = [...filter]; // copying the old datas array
    newFilter[0]['value'] = truthyValue; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [title]);
  //   useEffect for availability
  useEffect(() => {
    let truthyValue = availability.filter(
      (availability) => availability['value'] == true
    );
    let newFilter = [...filter]; // copying the old datas array
    newFilter[1]['value'] = truthyValue; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [availability]);
  //   useEffect for entity
  useEffect(() => {
    let truthyValue = entity.filter((entity) => entity['value'] == true);
    let newFilter = [...filter]; // copying the old datas array
    newFilter[2]['value'] = truthyValue; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [entity]);
  //   useEffect for gender
  useEffect(() => {
    let truthyValue = gender.filter((gender) => gender['value'] == true);
    let newFilter = [...filter]; // copying the old datas array
    newFilter[3]['value'] = truthyValue; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [gender]);
  //   useEffect for examination
  useEffect(() => {
    let newFilter = [...filter]; // copying the old datas array
    newFilter[4]['value'] = examination; // replace e.target.value with whatever you want to change it to
    setFilter(newFilter);
  }, [examination]);

  useEffect(() => {
    // setHomeSearch(initialHomeSearchState);

    console.log(filter);
  }, [filter]);

  return (
    <FilterContext.Provider
      value={{
        gender,
        setGender,
        examination,
        setExamination,
        entity,
        setEntity,
        availability,
        setAvailability,
        title,
        setTitle,
        initialHomeSearchState,
        homeSearch,
        setHomeSearch,
        filter,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
