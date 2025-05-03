        $(document).ready(function() {
            // Login Form Handling
            $('#login-form').on('submit', function(e) {
                e.preventDefault();
                
                const email = $('#email').val();
                const password = $('#password').val();
                
                // Simple validation
                let isValid = true;
                
                if (!email) {
                    $('#email').addClass('is-invalid');
                    isValid = false;
                } else {
                    $('#email').removeClass('is-invalid');
                }
                
                if (!password) {
                    $('#password').addClass('is-invalid');
                    isValid = false;
                } else {
                    $('#password').removeClass('is-invalid');
                }
                
                if (isValid) {
                    // Navigate to dashboard
                    $('#login-page').addClass('hidden');
                    $('#dashboard-page').removeClass('hidden');
                }
            });
            
            // Forgot Password Link
            $('#forgot-password').on('click', function() {
                alert('Esta funcionalidad se implementará posteriormente con la API real.');
            });
            
            // Sidebar Navigation
            $('.sidebar-menu-item').on('click', function() {
                $('.sidebar-menu-item').removeClass('active');
                $(this).addClass('active');
                
                const page = $(this).data('page');
                
                // Hide all content areas
                $('#dashboard-content, #new-ticket-content, #my-tickets-content, #ticket-detail-content').addClass('hidden');
                
                // Show selected content area
                switch(page) {
						case 'dashboard':
							$('#dashboard-content').removeClass('hidden');
							break;
						case 'new-ticket':
							$('#new-ticket-content').removeClass('hidden');
							break;
						case 'my-tickets':
							$('#my-tickets-content').removeClass('hidden');
							break;
						case 'ticket-detail':
							$('#ticket-detail-content').removeClass('hidden');
							break;
						case 'survey-modal':
							surveyModal.show(); // Mostrar modal manualmente
							break;
						default:
							$('#dashboard-content').removeClass('hidden');
					}

            });
            
            // Sidebar Toggle for Mobile
            $('#sidebar-toggle').on('click', function() {
                $('.sidebar').toggleClass('active');
                $('.main-content').toggleClass('sidebar-active');
            });
            
            // Logout Button
            $('#logout-btn').on('click', function() {
                $('#dashboard-page').addClass('hidden');
                $('#login-page').removeClass('hidden');
                
                // Reset form fields
                $('#login-form')[0].reset();
            });
            
            // New Ticket Form
            $('#new-ticket-form').on('submit', function(e) {
                e.preventDefault();
                
                const category = $('#ticket-category').val();
                const subject = $('#ticket-subject').val();
                const description = $('#ticket-description').val();
                
                // Simple validation
                let isValid = true;
                
                if (!category) {
                    $('#ticket-category').addClass('is-invalid');
                    isValid = false;
                } else {
                    $('#ticket-category').removeClass('is-invalid');
                }
                
                if (!subject) {
                    $('#ticket-subject').addClass('is-invalid');
                    isValid = false;
                } else {
                    $('#ticket-subject').removeClass('is-invalid');
                }
                
                if (!description) {
                    $('#ticket-description').addClass('is-invalid');
                    isValid = false;
                } else {
                    $('#ticket-description').removeClass('is-invalid');
                }
                
                if (isValid) {
                    alert('Ticket creado exitosamente. La API de envío se implementará en una etapa posterior.');
                    
                    // Reset form
                    $('#new-ticket-form')[0].reset();
                    
                    // Navigate to my tickets
                    $('.sidebar-menu-item').removeClass('active');
                    $('.sidebar-menu-item[data-page="my-tickets"]').addClass('active');
                    
                    $('#new-ticket-content').addClass('hidden');
                    $('#my-tickets-content').removeClass('hidden');
                }
            });
            
            // Cancel Ticket Button
            $('#cancel-ticket-btn').on('click', function() {
                $('#new-ticket-form')[0].reset();
                
                // Navigate back to dashboard
                $('.sidebar-menu-item').removeClass('active');
                $('.sidebar-menu-item[data-page="dashboard"]').addClass('active');
                
                $('#new-ticket-content').addClass('hidden');
                $('#dashboard-content').removeClass('hidden');
            });
            
            // View Ticket Details
            $('.tickets-container .btn-outline-primary').on('click', function() {
                $('#my-tickets-content').addClass('hidden');
                $('#ticket-detail-content').removeClass('hidden');
            });
            
            // Initialize Bootstrap components
            var surveyModal = new bootstrap.Modal(document.getElementById('survey-modal'));
            
            // Show survey modal when ticket is closed
            $('.btn-outline-success').on('click', function() {
                surveyModal.show();
            });
            
            // Submit Survey
            $('#submit-survey').on('click', function() {
                alert('Encuesta enviada. Gracias por tus comentarios.');
                surveyModal.hide();
            });
        });