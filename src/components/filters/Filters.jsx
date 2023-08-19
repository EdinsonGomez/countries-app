'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "src/styles/filters/filters.module.css";

const regions = {
  Africa: "Africa",
  America: "Americas",
  Asia: "Asia",
  Europe: "Europe",
  Oceania: "Oceania"
}

const SelectCustom = ({ value, placeholder, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!elRef?.current) return

      if (!elRef.current.contains(event.target)) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [elRef, onChange])

  return (
    <div
      className={`${styles.select} ${isActive ? styles.isActive : ''}`}
      onClick={() => setIsActive(!isActive)}
      ref={elRef}
    >
      <input
        type="text"
        placeholder='Filter by Region'
        value={value}
        readOnly
      />
      <ul className={`${styles.select_options} ${isActive ? styles.show_menu : ''}`}>
        {Object
          .keys(regions)
          .map((countryKey) => (
            <li
              key={`option-${countryKey}`}
              onClick={() => onChange(countryKey, regions[countryKey])}
            >
              {regions[countryKey]}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const Filters = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const onChangeRegion = (key, value) => {
    setRegion(value);
    router.push(`/region/${key}`);
  }

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  const onClickSearch = () => {
    if (search) {
      router.push(`/search/${search}`);
      setRegion('');
    } else {
      router.push('/');
    }
  }

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  }

  useEffect(() => {
    if (pathName === '/') {
      setRegion('');
      setSearch('');
    }
  }, [pathName])

  return (
    <div className={styles.filters_container}>
      <div className={styles.search_input}>
        <span onClick={onClickSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          id="search_input"
          name="search_input"
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={search}
          onKeyUp={onKeyUp}
        />
      </div>

      <SelectCustom
        placeholder="Filter by Region"
        value={region}
        onChange={onChangeRegion}
      />
    </div>
  )
}

export default Filters;