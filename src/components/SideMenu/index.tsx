import { Link } from 'react-router-dom';
import {
    SidebarWrapper,
    SidebarTitle,
    DateFilter,
    DateLabel,
    DateInput,
    AuthorsDropdown,
    AuthorsLabel,
    AuthorsSelect,
} from './sideMenu.style'

const SideMenu = () =>{
  return (
    <SidebarWrapper>
      <SidebarTitle>Filters</SidebarTitle>
      <DateFilter>
        <DateLabel htmlFor="fromDate">From Date:</DateLabel>
        <DateInput type="date" id="fromDate" />
      </DateFilter>
      <DateFilter>
        <DateLabel htmlFor="toDate">To Date:</DateLabel>
        <DateInput type="date" id="toDate" />
      </DateFilter>
      <AuthorsDropdown>
        <AuthorsLabel htmlFor="authors">Authors:</AuthorsLabel>
        <AuthorsSelect id="authors">
          <option value="author1">xxxx 1</option>
          <option value="author2">Auxxxxthor 2</option>
          <option value="author3">Author 3xxxxx</option>
        </AuthorsSelect>
      </AuthorsDropdown>
    </SidebarWrapper>
  );
}

export default SideMenu;