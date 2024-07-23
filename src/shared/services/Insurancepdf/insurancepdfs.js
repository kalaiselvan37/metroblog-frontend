import { useState, useEffect } from 'react';
import { pdfData } from './pdfData';


export function useInsuranceQuery() {
  const [insuranceType, setInsuranceType] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);

  useEffect(() => {
    if (insuranceType) {
      setOptions1(Object.keys(pdfData[insuranceType]));
    }
  }, [insuranceType]);

  useEffect(() => {
    if (insuranceType && option1) {
      setOptions2(Object.keys(pdfData[insuranceType][option1]));
    }
  }, [insuranceType, option1]);

  const handleInsuranceTypeChange = (e) => {
    setInsuranceType(e.target.value);
    setOption1('');
    setOption2('');
  };

  const handleOption1Change = (e) => {
    setOption1(e.target.value);
    setOption2('');
  };

  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };

  const handleCheckNow = () => {
    if (insuranceType && option1 && option2) {
      const pdfUrl = pdfData[insuranceType][option1][option2];
      window.open(pdfUrl, '_blank');
    } else {
      alert('Please select all options');
    }
  };

  return {
    insuranceType,
    option1,
    option2,
    options1,
    options2,
    handleInsuranceTypeChange,
    handleOption1Change,
    handleOption2Change,
    handleCheckNow,
  };
}