import Link from "next/link";
import CampaignList from './components/CampaignList/CampaignList'

const Home = () => {
  return (
    <main>
      <h1>Kickstarter - web3</h1>
      <p>Get your idea funded by degens</p>
      <ul>
        <li>anyone can start a campaign</li>
        <li>donators vote on how funds are spent</li>
        <li>no middle man, community first</li>
      </ul>
      <br />
      <Link className="button" href={'/create'}>Create my campaign</Link>
      <br />
      <hr />
      <CampaignList />
    </main>
  )
}

export default Home