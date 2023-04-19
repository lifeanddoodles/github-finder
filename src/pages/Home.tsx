import UserCard from '../components/UserCard';
import { dummyUsers } from '../data/api';
import { homePageTexts } from '../data/texts';
import Header from '../layout/Header';
import ResultsSection from '../layout/ResultsSection';

const { title, buttonLabel } = homePageTexts;

const Home = (): JSX.Element => {
  return (
    <>
      <Header>{title}</Header>
      <ResultsSection>
        {dummyUsers && (
          <ul>
            {dummyUsers.map((item, index) => (
              <li key={index}>
                <UserCard user={item} buttonLabel={buttonLabel} />
              </li>
            ))}
          </ul>
        )}
      </ResultsSection>
    </>
  );
};

export default Home;
