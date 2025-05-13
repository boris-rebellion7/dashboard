import PageHeader from './components/PageHeader'

function App() {

  return (
    <>
      <div>
        <PageHeader
          headline="Bag Ventures"
          image={{
            url: '/header.png',
            alt: 'Bag Ventures'
          }}
        />
      </div>
    </>
  )
}

export default App
