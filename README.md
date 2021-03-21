# __Rapid Rides__
Live Link: https://rapid-riders-63b08.web.app/

## **_Website features_** :

> User can see Different vehicle ride shareing card in Home UI 

> If the user hovers on the team card then the user will watch a mind-blowing effect.

> If the user clicks the any vehicle card, the user will see route search and map in destination page. If user not log in the this site it will show log in page before show destination page. after log in successfully system redirect to destination page.
    
> Before try to search ride user must logged in to the website. User can Sign Up or sign In using log in page. After log in successfully user will see his/her Name in top right corner navigation bar. user can log in/sign in useing their google and facebook account. If any user haven't exiting account , user can create an account using user name,email and password .

> Create account and log in password validation with error alert.


## **_Usage Function_** :
1. Hooks 
    * useEffect()
    ```js
    useEffect(() =>{
        fetch("url")
        .then((response) => response.json())
        .then( data => setData(data))
    },[])
    ```
    * useState()
    ```js
    const [name, setName] = useState([])
    ```
    * useParams()
    ```js
    const {id} = useParams()
    ```
2. React Router
    * Router
    * Route
    * Switch
    * Link

3. Authentication System (Using Firebase)
    * Create account by Email and Password
    * Log in Using social Provider
    * Log in using exiting email and password.
    
    | Thank you very much. |
    | ------------- |