/*import { useState } from 'react';
import {
  Slider,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Text,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
} from '@chakra-ui/react';

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [hoveringCategories, setHoveringCategories] = useState(false);
  const [duration, setDuration] = useState('any');

  const handlePriceRangeChange = (newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoriesMouseEnter = () => {
    setHoveringCategories(true);
  };

  const handleCategoriesMouseLeave = () => {
    setHoveringCategories(false);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <Box p={4}>
      <h3>Filters</h3>
      <Divider my={4} />
      <h2 onMouseEnter={handleCategoriesMouseEnter}>Categories</h2>
      <List
        aria-label="categories list"
        display={hoveringCategories ? 'block' : 'none'}
        onMouseLeave={handleCategoriesMouseLeave}
      >
        {categories.map((category) => (
          <ListItem key={category} py={1} px={2}>
            <Text>{category}</Text>
          </ListItem>
        ))}
      </List>
      <br />
      <Box>
        <Text fontSize="md" fontWeight="bold">
          Price Range
        </Text>
        <Slider
          colorScheme="orange"
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={500}
          className={priceRange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Stack direction="row" justifyContent="space-between">
          <Text>${priceRange[0]}</Text>
          <Text>${priceRange[1]}</Text>
        </Stack>
      </Box>
      <Box>
        <Text fontSize="md" fontWeight="bold">
          Duration
        </Text>
        <RadioGroup
          onChange={(e) => handleDurationChange(e.target.value)}
          value={duration}
        >
          <Stack spacing="2" mt="2">
            <Radio value="short">Short (0-2 hours)</Radio>
            <Radio value="medium">Medium (2-4 hours)</Radio>
            <Radio value="long">Long (4+ hours)</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;*/
/*

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  CheckboxGroup,
  Select,
  Button,
} from '@chakra-ui/react';
import ListProfils from '../../components/listprofils';

const profiles = [ListProfils];

const Sidebar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [skills, setSkills] = useState([]);

  const handleFilter = () => {
    const filteredProfiles = profiles.filter((profile) => {
      let isMatch = true;
      if (category && profile.category !== category) {
        isMatch = false;
      }
      if (
        priceRange &&
        (profile.price < priceRange[0] || profile.price > priceRange[1])
      ) {
        isMatch = false;
      }
      if (
        skills.length > 0 &&
        !skills.every((skill) => profile.skills.includes(skill))
      ) {
        isMatch = false;
      }
      return isMatch;
    });
    onFilter(filteredProfiles);
  };
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [],
    skills: [],
  });

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Filter Profiles
      </Text>
      <Box mb={4}>
        <Text fontWeight="bold">Category</Text>
        <Select
          placeholder="Select category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Graphic Design">Graphic Design</option>
        </Select>
      </Box>
      <Box mb={4}>
        <Text fontWeight="bold">Price Range</Text>
        <Flex>
          <Input
            placeholder="Min"
            type="number"
            mr={2}
            onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
          />
          <Input
            placeholder="Max"
            type="number"
            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
          />
        </Flex>
      </Box>
      <Box mb={4}>
        <Text fontWeight="bold">Skills</Text>
        <CheckboxGroup
          colorScheme="green"
          onChange={(skills) => setSkills(skills)}
        >
          <Checkbox value="React">React</Checkbox>
          <Checkbox value="Node.js">Node.js</Checkbox>
          <Checkbox value="JavaScript">JavaScript</Checkbox>
          <Checkbox value="React Native">React Native</Checkbox>
          <Checkbox value="Java">Java</Checkbox>
          <Checkbox value="Swift">Swift</Checkbox>
          <Checkbox value="Photoshop">Photoshop</Checkbox>
          <Checkbox value="Illustrator">Illustrator</Checkbox>
          <Checkbox value="InDesign">InDesign</Checkbox>
        </CheckboxGroup>
      </Box>
      <Button colorScheme="green" onClick={handleFilter}>
        Apply
      </Button>
    </Box>
  );
};
export default Sidebar;
/*
import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const Sidebar = ({ isOpen, onClose, categories, skills, onFilter }) => {
  const [filterOptions, setFilterOptions] = React.useState({
    categories: [],
    skills: [],
    priceByHour: '',
  });

  const handleCheckboxChange = (type, value) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [type]: prevOptions[type].includes(value)
        ? prevOptions[type].filter((val) => val !== value)
        : [...prevOptions[type], value],
    }));
  };

  const handlePriceChange = (e) => {
    setFilterOptions({
      ...filterOptions,
      priceByHour: e.target.value,
    });
  };

  const handleApplyFilter = () => {
    onFilter(filterOptions);
    onClose();
  };

  const handleClearFilter = () => {
    setFilterOptions({
      categories: [],
      skills: [],
      priceByHour: '',
    });
    onFilter({});
    onClose();
  };

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width={isOpen ? '250px' : '0'}
      bg="white"
      boxShadow="lg"
      transition="all 0.3s"
      overflowY="scroll"
      zIndex="overlay"
    >
      <Box p="4">
        <Stack spacing={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="md">Filter</Heading>
            <Button onClick={onClose}>Close</Button>
          </Box>
          <Box>
            <Text fontWeight="bold">Categories:</Text>
            <CheckboxGroup colorScheme="teal">
              <Stack spacing={2}>
                {categories.map((category) => (
                  <Checkbox
                    key={category}
                    value={category}
                    isChecked={filterOptions.categories.includes(category)}
                    onChange={(e) =>
                      handleCheckboxChange('categories', e.target.value)
                    }
                  >
                    {category}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box>
            <Text fontWeight="bold">Skills:</Text>
            <CheckboxGroup colorScheme="teal">
              <Stack spacing={2}>
                {skills.map((skill) => (
                  <Checkbox
                    key={skill}
                    value={skill}
                    isChecked={filterOptions.skills.includes(skill)}
                    onChange={(e) =>
                      handleCheckboxChange('skills', e.target.value)
                    }
                  >
                    {skill}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box>
            <Text fontWeight="bold">Price By Hour:</Text>
            <Box>
              <input
                type="number"
                onChange={handlePriceChange}
                value={filterOptions.priceByHour}
              />
            </Box>
          </Box>
          <Box>
            <Button colorScheme="teal" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
            <Button colorScheme="gray" ml={2} onClick={handleClearFilter}>
              Clear Filter
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
*/

import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { GlobalContext } from '../../context/GlobalWrapper';

const Sidebar = () => {
  const { categories, skills, priceRanges, FilterProfils } =
    useContext(GlobalContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
    FilterProfils(selected, selectedSkills, selectedPriceRange);
  };

  const handleSkillChange = (selected) => {
    setSelectedSkills(selected);
    FilterProfils(selectedCategories, selected, selectedPriceRange);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    FilterProfils(selectedCategories, selectedSkills, event.target.value);
  };

  return (
    <Box p="4">
      <FormControl>
        <FormLabel>Categories</FormLabel>
        <CheckboxGroup colorScheme="purple" onChange={handleCategoryChange}>
          {categories.map((category) => (
            <Checkbox key={category} value={category}>
              {category}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Skills</FormLabel>
        <CheckboxGroup colorScheme="purple" onChange={handleSkillChange}>
          {skills.map((skill) => (
            <Checkbox key={skill} value={skill}>
              {skill}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Hourly Price Range</FormLabel>
        <Stack direction="row">
          {priceRanges.map((range) => (
            <Button
              key={range}
              variant={selectedPriceRange === range ? 'solid' : 'outline'}
              onClick={handlePriceRangeChange}
              value={range}
            >
              {range}
            </Button>
          ))}
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Sidebar;
