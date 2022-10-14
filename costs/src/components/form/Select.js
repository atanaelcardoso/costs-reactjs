import styles from './Select.module.css'

function Select({ text, name, options, handleOnChenge, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
     <select
       name={name}
       id={name} 
       onChenge={handleOnChenge} 
       value={value || ''}
      >
     <option>Selecione uma opcao</option>
       {options.map((option) => (
       <optin value={option.id} key={option.id}>{option.name}</optin>
       ))}
     </select>
    </div>
  )
}

export default Select