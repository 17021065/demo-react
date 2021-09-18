const ContentContainer = ({children}) => {
    return <div className="w3-col m7 l10">
        <div className="w3-row">
            {children}
        </div>
    </div>
}

export default ContentContainer;