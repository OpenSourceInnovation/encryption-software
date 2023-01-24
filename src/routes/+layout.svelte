<script>
    import Title from "../lib/title.svelte";
    import '../styles/global.css';
</script>

<header>
    <nav>
        <Title title="The App"></Title>
        
        <div class="links">
            <a href="/">Home</a>
            <a href="/SignUp">Sign Up</a>
            <a href="/SignIn">Sign In</a>
        </div>
    
    </nav>

</header>
<main>
    <slot></slot>
</main>
<footer>
    <p>© 2020 Enc Tool</p>
</footer>

<style>
    /* Paragraphs */
p {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #444;
    line-height: 1.5;
    margin-bottom: 20px;
}

/* Headers */
header {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
}

/* Footers */
footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

footer p {
    color: rgb(202, 202, 202);
    margin-bottom: 0;
}

nav {
    display: flex;
    max-width:  960px;
    margin: 0 auto;
    align-items: center;
}

.links {
    margin-left: auto;
}

/* TODO */
</style>
